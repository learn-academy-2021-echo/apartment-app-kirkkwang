## Initial Installs and Resources

### RSpec

```shell
$ bundle add rspec-rails
$ rails generate rspec:install
```

### Devise

```shell
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
```

### React

```shell
$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
```

### Serve React Components

```shell
$ rails generate controller Home
```

#### Add a file in _app/views/home_ called _index.html.erb_

#### Call the React component in `erb` tags

```ruby
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

#### Direct the Rails app to serve the React `App.js` component as the landing page

```ruby
Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```

### Apartment Resource

#### Apartment listings have a street designation, city, state, a manager's name, manager's contact email, monthly rental price, number of bedrooms, number of bathrooms, and whether they allow pets.

```shell
#  NOTE TO SELF FOR THE FUTURE, DON'T FORGET THE FOREIGN KEY, IN THIS CASE IT'S `user_id` SINCE `User` IS THE MODEL

$ rails g resource Apartment street:string city:string state:string manager_name:string manager_email:string monthly_rent:decimal number_of_bedrooms:integer number_of_bathrooms:decimal allow_pets:boolean

$ rails db:migrate
```

#### Define relationship between Apartment and User

````ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
  has_many :apartments
end```
````

```ruby
class Apartment < ApplicationRecord
  belonds_to :user
end
```

And it was at this point I realized I forgot the foreign key...

```shell
$ rails g migration add_foreign_key_to_apartments
```

```ruby
class AddForeignKeyToApartments < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :user_id, :integer
  end
end
```

```shell
$ rails db:migrate
```

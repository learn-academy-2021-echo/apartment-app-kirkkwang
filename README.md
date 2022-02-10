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

Generated some migration files because I tried changing the data type up but didn't do anything different, I wanted change how the values looked in rails console `number_of_bathrooms: 0.15e1` to `number_of_bathrooms: 1.5` but maybe that's just a rails console thing..

### Unprotected Index

Adjusted my mock data to incorporate the user to hopefully prep for database read. Since an apartment `belongs_to` a user, it cannot exit without the user.

```javascript
{
  id: 1,
  email: "kbeasley@123.com",
  password: "valid_password",
  apartments: [
    {
      id: 1,
      street: "3742 Hamill Avenue",
      city: "San Diego",
      state: "CA",
      manager_name: "Kira Beasley",
      manager_email: "kbeasley@123.com",
      monthly_rent: 1850,
      number_of_bedrooms: 2,
      number_of_bathrooms: 1.5,
      allow_pets: true,
      user_id: 1,
    },
  ],
},
```

```javascript
// `users` is deconstructed from `this.props.users`
// ApartmentIndex.js
<div className="Index">
  {users.map((user) =>
    user.apartments.map((apartment) => {
      return (
        <NavLink
          to={`/apartmentshow/${apartment.id}`}
          key={apartment.id}
          style={{ textDecoration: "none" }}
        >
          <div className="Apartment Info">
            <ul>
              <li>Street: {apartment.street}</li>
              <li>City: {apartment.city}</li>
              <li>State: {apartment.state}</li>
              <li>Manager Name: {apartment.manager_name}</li>
              <li>Manager Email: {apartment.manager_email}</li>
              <li>Monthly Rent: {apartment.monthly_rent}</li>
              <li>Bedrooms: {apartment.number_of_bedrooms}</li>
              <li>Bathrooms: {apartment.number_of_bathrooms}</li>
              <li>Pets: {apartment.allow_pets ? "Yes" : "No"}</li>
              <li>User ID: {apartment.user_id}</li>
            </ul>
          </div>
        </NavLink>
      );
    })
  )}
</div>
```

Also tried using front end libraries for the first time to see if I like it, reactstrap in this case.

```javascript
// all components were import at the top as well as a `this.toggle.bind(this)` that I'm not certain how it works but I think it's a prop from the original component or something like that

// incorporated the sign_in_route and sign_out_route into the NavLink

// Header.js
<nav>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Apartment App</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/apartmentindex">Listings</NavLink>
        </NavItem>
        <NavItem>
          {!logged_in && (
            <NavLink href={sign_in_route}>Sign In/Register</NavLink>
          )}
          {logged_in && <NavLink href={sign_out_route}>Sign Out</NavLink>}
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</nav>
```

### Unprotected Show

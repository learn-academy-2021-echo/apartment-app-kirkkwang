class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :street
      t.string :city
      t.string :state
      t.string :manager_name
      t.string :manager_email
      t.decimal :monthly_rent
      t.integer :number_of_bedrooms
      t.decimal :number_of_bathrooms
      t.boolean :allow_pets

      t.timestamps
    end
  end
end

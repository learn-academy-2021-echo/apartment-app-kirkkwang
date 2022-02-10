# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## WORK IN PROGRESS
users = [
  {
    email:'kbeasley@123.com',
    password:'password123',
    apartments: [
      {
        street: '3742 Hamill Avenue',
        city: 'San Diego',
        state: 'CA',
        manager_name: 'Kira Beasley',
        manager_email: 'kbeasley@123.com',
        monthly_rent: 1850,
        number_of_bedrooms: 2,
        number_of_bathrooms: 1.5,
        allow_pets: true,
      }
    ]
  },
  {
    email:'satkinson@123.com',
    password:'password123',
    apartments: [
      {
        street: '814 Carriage Court',
        city: 'San Diego',
        state: 'CA',
        manager_name: 'Shannon Atkinson',
        manager_email: 'satkinson@123.com',
        monthly_rent: 2230,
        number_of_bedrooms: 3,
        number_of_bathrooms: 2,
        allow_pets: true,
      },
      {
        street: '3956 Poplar Avenue',
        city: 'San Diego',
        state: 'CA',
        manager_name: 'Shannon Atkinson',
        manager_email: 'satkinson@123.com',
        monthly_rent: 1575,
        number_of_bedrooms: 1,
        number_of_bathrooms: 1.5,
        allow_pets: false,
      }
    ]
  }
]

users.each do |each_user|
  User.new
  User.create each_user
  puts "Creating user #{each_user['email']}"
end
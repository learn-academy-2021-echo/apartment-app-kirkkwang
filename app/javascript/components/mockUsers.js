let users = [
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
  {
    id: 2,
    email: "satkinson@123.com",
    password: "valid_password",
    apartments: [
      {
        id: 2,
        street: "814 Carriage Court",
        city: "San Diego",
        state: "CA",
        manager_name: "Shannon Atkinson",
        manager_email: "satkinson@123.com",
        monthly_rent: 2230,
        number_of_bedrooms: 3,
        number_of_bathrooms: 2,
        allow_pets: true,
        user_id: 2,
      },
      {
        id: 3,
        street: "3956 Poplar Avenue",
        city: "San Diego",
        state: "CA",
        manager_name: "Shannon Atkinson",
        manager_email: "satkinson@123.com",
        monthly_rent: 1575,
        number_of_bedrooms: 1,
        number_of_bathrooms: 1.5,
        allow_pets: false,
        user_id: 2,
      },
    ],
  },
];

export default users;

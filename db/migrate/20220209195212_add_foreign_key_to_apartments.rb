class AddForeignKeyToApartments < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :user_id, :integer
  end
end

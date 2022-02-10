class UpdateNumberOfBathroomsToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :apartments, :number_of_bathrooms, :float
  end
end
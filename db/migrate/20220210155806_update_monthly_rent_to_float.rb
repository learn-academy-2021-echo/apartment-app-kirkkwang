class UpdateMonthlyRentToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :apartments, :monthly_rent, :float
  end
end

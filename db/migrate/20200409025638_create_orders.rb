class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :firstName, null: false, index: true
      t.string :lastName, null: false, index: true
      t.string :email, null: false, index: true
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.boolean :newsLetter, null: false, index: true
      t.timestamps
    end
  end
end

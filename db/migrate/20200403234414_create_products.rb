class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title, index: true
      t.text :description
      t.decimal :price
      t.integer :quantity
      t.timestamps
    end
  end
end

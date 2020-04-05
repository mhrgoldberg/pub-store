class AddImageToProject < ActiveRecord::Migration[6.0]
  def change
    change_table :products do |t|
      t.string :image
    end

    change_column_null :products, :title, false
    change_column_null :products, :price, false
    change_column_null :products, :quantity, false

  end
end

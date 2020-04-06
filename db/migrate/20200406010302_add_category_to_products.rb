class AddCategoryToProducts < ActiveRecord::Migration[6.0]
  def change
    change_table :products do |t|
      t.string :category, null: false, index: true
    end
  
  end
end

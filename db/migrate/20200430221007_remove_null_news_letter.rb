class RemoveNullNewsLetter < ActiveRecord::Migration[6.0]
  def change
    change_column_null :orders, :newsLetter, false
    change_column_default :orders, :newsLetter, from: true, to: false
  end
end

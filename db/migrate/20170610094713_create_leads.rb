class CreateLeads < ActiveRecord::Migration
  def change
    create_table :leads do |t|
      t.integer :account_id
      t.integer :contact_id
      t.integer :product_line_id
      t.integer :product_id
      t.text :notes

      t.timestamps null: false
    end
  end
end

class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :contact_number
      t.integer :account_id

      t.timestamps null: false
    end
  end
end

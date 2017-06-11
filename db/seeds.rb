Account.create!(name:"Company 1", location:"USA")
Account.create!(name:"Company 2", location:"USA")
Account.create!(name:"Company 3", location:"USA")

Contact.create!(name:"Company 1 Employee", contact_number:"123456", account_id: 1)
Contact.create!(name:"Company 1 Employee 2", contact_number:"123456", account_id: 1)
Contact.create!(name:"Company 1 Employee 3", contact_number:"123456", account_id: 1)
Contact.create!(name:"Company 2 Employee", contact_number:"123456", account_id: 2)
Contact.create!(name:"Company 3 Employee", contact_number:"123456", account_id: 3)

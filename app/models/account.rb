class Account < ActiveRecord::Base
   include PgSearch
   multisearchable :against => [:name]
   has_many :contacts, :touch => true
end

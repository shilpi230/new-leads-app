class Contact < ActiveRecord::Base

  include PgSearch
  multisearchable :against => [:name, account_name]
  belongs_to :account
  delegate :name, :to => :account, :prefix => true
end

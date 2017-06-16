class Contact < ActiveRecord::Base

  include PgSearch
  multisearchable :against => [:account_name]
  belongs_to :account
  delegate :name, :to => :account, :prefix => true
end

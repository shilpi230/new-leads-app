class Contact < ActiveRecord::Base

  include PgSearch
  pg_search_scope :search,
                 :against => :name,
                 :using => {
                   :tsearch => {:prefix => true}
                 }
  # pg_search_scope :search_by_name, :against => :name
  # multisearchable :against => [:account_name]
  belongs_to :account
  delegate :name, :to => :account, :prefix => true
end

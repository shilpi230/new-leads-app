class Account < ActiveRecord::Base
   include PgSearch
   pg_search_scope :search,
                  :against => :name,
                  :using => {
                    :tsearch => {:prefix => true}
                  }
  #  multisearchable :against => [:name]
   has_many :contacts
end

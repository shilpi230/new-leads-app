class LeadsController < ApplicationController
    def new
        @pg_search_documents = PgSearch.multisearch(params[:query])
        #@q = Account.ransack(params[:q])
        #@accounts = @q.result
        #@accounts = Account.where(name: params["name"]) if params["name"].present?
        #@contacts = Contact.where(name: params["name"]) if params["name"].present?
    end
end

class AccountsController < ApplicationController
def index
    @account = Account.all
end

def new
    @account = Account.new
end

def show
end

def create
    @account = Account.new(account_params)
    if @account.save
      redirect_to @account, notice: "Your post was created successfully."
    else
      render :new
    end
end

def list_accounts
  @accounts =  Account.search(params[:value])
  @values = []
  if @accounts.present?
    @accounts.each do |account|
      @values.push(account.as_json(include: { contacts: { only: [:id, :name] }}, only: [:id, :name]))
    end
  end
  render json: @values
end

def list_contacts
  @contacts =  Contact.search(params[:value])
  @values = []
  if @contacts.present?
    @contacts.each do |contact|
      @values.push(contact.as_json(include: { account: { only: [:name] }}, only: [:id, :name]))
    end
  end
  render json: @values
end

# def list_contacts
#   @records =  PgSearch.multisearch(params[:value])
#   render json: @records
# end

# def list_account_contacts
#   @records =  PgSearch.multisearch(params[:value])
#   render json: @records
# end

  private

  def account_params
    params.require(:account).permit(:name, :location)
  end

end

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

def list_account_contacts
  @records =  PgSearch.multisearch(params[:value])
  render json: @records
end

def list_contacts
  @account = Account.find(params[:value])
  @records = @account.contacts
  render json: @records
end

  private

  def account_params
    params.require(:account).permit(:name, :location)
  end

end

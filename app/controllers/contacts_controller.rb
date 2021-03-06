class ContactsController < ApplicationController
def index
    @contact = Contact.all
end

def new
    @contact = Contact.new
end

def show
end

def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to @contact, notice: "Your contact was created successfully."
    else
      render :new
    end
end

def name
  @contact = Contact.find(params[:value])
  @names = []
  @names.push(@contact.as_json(include: { account: { only: [:name] }}, only: [:name]))
  render json:  @names
end

  private

  def contact_params
    params.require(:contact).permit(:account_id, :name, :contact_number)
  end

end

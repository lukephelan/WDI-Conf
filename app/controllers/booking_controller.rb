class BookingController < ApplicationController

  def index
    @tickets_page = true
  end

  def create
    amount_of_tickets = params[:amount].to_i
    # pass params[:seat_no]
    amount_of_tickets.times do
      ticket = Ticket.new
      # event_id = params[:event_id]
      # user_id = params[:user_id]
      # hard code first, after finish login and schedule part, then pass these params.
      ticket.event_id = Event.first.id
      ticket.save
    end
    # hard code to index page first, after finish the home page change to homepage
    render :index

  end

  def show
    # should render to user's profile page which we don't have yet, hard code to show page
  end

end

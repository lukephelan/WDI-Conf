Rails.application.routes.draw do
	resources :speaker
	resources :timetable

	root to: "home#index"


	resources :seatings do
	collection do
		put '/unreserve' => 'seatings#unreserve_seats'
		put '/showsomething' => 'seatings#showsomething'
		end
	end
end
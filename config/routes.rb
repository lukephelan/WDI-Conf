Rails.application.routes.draw do
	resources :speaker
	resources :timetable
	resources :seatings do
		collection do
			put '/unreserve' => 'seatings#unreserve_seats'
		end
	end

	root 'home#index'
end
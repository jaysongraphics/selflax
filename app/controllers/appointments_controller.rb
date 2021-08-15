class AppointmentsController < ApplicationController


    def index
        appointments = Appointment.all
        render json: appointments
    end 

       def create
        app = Appointment.create(sub_params)
        if app.valid?
            render json: app, status: :created
        else
            render json: {errors: app.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        app = Appointment.find_by(id: params[:id])
        if app
            render json: app
        else
            render json: {"error": "service not found"}, status: :not_found
        end
    end


private
        def sub_params
        params.permit(:user_id, :appoinment_id)
        end

end

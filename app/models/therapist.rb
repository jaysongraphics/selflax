class Therapist < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments

    has_many :reviews
    has_many :users, through: :reviews

    # has_many :reviews

end

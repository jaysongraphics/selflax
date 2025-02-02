class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :image
      t.string :first_name
      t.string :last_name
      t.string :birthday
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end

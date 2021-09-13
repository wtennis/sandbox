class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :description
      t.string :title
      t.string :category
      t.boolean :is_public
      t.belongs_to :user

      t.timestamps
    end
  end
end

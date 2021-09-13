class CreateRandomImageWidgets < ActiveRecord::Migration[6.1]
  def change
    create_table :random_image_widgets do |t|
      t.string :image_url

      t.timestamps
    end
  end
end

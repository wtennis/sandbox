class CreateRhymifyWidgets < ActiveRecord::Migration[6.1]
  def change
    create_table :rhymify_widgets do |t|
      t.string :input_word
      t.text :rhymes

      t.timestamps
    end
  end
end

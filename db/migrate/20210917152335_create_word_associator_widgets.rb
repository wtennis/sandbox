class CreateWordAssociatorWidgets < ActiveRecord::Migration[6.1]
  def change
    create_table :word_associator_widgets do |t|
      t.string :input_word
      t.text :associates

      t.timestamps
    end
  end
end

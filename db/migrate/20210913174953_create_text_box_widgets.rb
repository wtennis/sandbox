class CreateTextBoxWidgets < ActiveRecord::Migration[6.1]
  def change
    create_table :text_box_widgets do |t|
      t.text :text

      t.timestamps
    end
  end
end

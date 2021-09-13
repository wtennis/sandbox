class CreateProjectWidgets < ActiveRecord::Migration[6.1]
  def change
    create_table :project_widgets do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.integer :widgetable_id
      t.string :widgetable_type

      t.timestamps
    end
  end
end

class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :category, :widgets


  def widgets
    self.object.widgets.map {|w| {w.class.name => w} }
  end

end

class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :category
end

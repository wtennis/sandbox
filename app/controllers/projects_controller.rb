class ProjectsController < ApplicationController

    def index
        projects = Project.all.where(user_id: session[:user_id])
        render json: projects
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy
        head :no_content
    end

    def add_widget
        #should we have a widget controller?
        project_id = params[:project_id]
        widget = params[:widget]
        widget_type = widget.keys[0]
        case widget_type
        when "TextBoxWidget"
            widgetable = TextBoxWidget.create(text: params[:widget][widget_type]['text'])
            project_widget = ProjectWidget.create(project_id: params[:project_id], widgetable_id: widgetable.id, widgetable_type: "TextBoxWidget")
        when "RandomImageWidget"
            widgetable = RandomImageWidget.create(image_url: params[:widget][widget_type]['image_url'])
            project_widget = ProjectWidget.create(project_id: params[:project_id], widgetable_id: widgetable.id, widgetable_type: "RandomImageWidget")
        end
        render json: widgetable, status: :created
    end


end

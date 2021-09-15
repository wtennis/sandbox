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
            puts params[:widget][widget_type]['text']
        when "RandomImageWidget"
            puts params[:widget][widget_type]['image_url']
        end

    end


end

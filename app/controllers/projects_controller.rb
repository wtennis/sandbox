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


end

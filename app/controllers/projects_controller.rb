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

    def create
        user = User.find_by(id: session[:user_id])
        project = user.projects.create(project_params)
        render json: project, status: :created
    end

    def update
        project = Project.find_by(id: params[:id])
        project.update!(project_params)
        render json: project
    end

    private
    def project_params
        params.permit(:title, :description, :category, :is_public)
    end

end

class CommentsController < ApplicationController 
 before_action :authorize_request, except: :show

 def create 
  puts params
@company = Company.find(params[:company_id])
@comment = @current_user.comments.build(comment_params)
@comment.company =@company

if @comment.save 
  render json: @comment
else 
  render json: @comment.errors
end
 end

 def delete
  @comment= Comment.find(params[:id])
  puts @comment
  @comment.delete
 end

 def show
  @comment= Comment.find(params[:id])
  render json: @comment
 end

def update
  @comment= Comment.find(params[:id])
  @comment.comment_text=comment_params[:comment_text]
  if @comment.save 
    render json: @comment
  else 
    render json: @comment.errors
  end
end
private
def comment_params
  params.require(:comment).permit(:comment_text)
end

end



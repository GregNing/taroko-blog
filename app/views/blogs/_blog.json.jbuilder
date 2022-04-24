json.extract! blog, :id, :title, :author, :created_at, :updated_at
json.url blog_url(blog, format: :json)

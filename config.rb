# ENV['SSL_CERT_FILE'] = Gem.loaded_specs['google-api-client'].full_gem_path+'/lib/cacert.pem'

# Reload the browser automatically whenever files change
activate :livereload

###
# Compass
###
compass_config do |config|
  config.output_style = :compressed
end

###
# Helpers
###
helpers do
  def get_url
    absolute_prefix + url_prefix
  end
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
activate :directory_indexes
# activate :google_drive, load_sheets: {
#   evanrindler: "1so67UnvjZS-XMfnZFaOAVfXp2-jYuW0XEGREtJk2rFg"
# }

# Build-specific configuration
configure :build do
  page "/article", :layout => "story.scss"
  page "/", :layout => "index.scss"
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  data.stories.each do |entry|
    proxy "writing/story/#{entry.slug}.html", "/story.html", :locals => { 
      :entry_name => entry.title,
      :entry_date => entry.date,
      :entry_body => entry.text,
      :entry_slug => entry.slug,
      :entry_preview => entry.preview
      }, :ignore => true
  end

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

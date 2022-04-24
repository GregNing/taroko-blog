// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import "@rails/actiontext"
import "popper"
import "bootstrap"

window.addEventListener("trix-file-accept", function (event) {
  const acceptedTypes = ['image/jpeg', 'image/png']
  const maxFileSize = 1024 * 1024
  if (!acceptedTypes.includes(event.file.type)) {
    event.preventDefault()
    alert("Only support attachment of jpeg or png files")
  }

  if (event.file.size > maxFileSize) {
    event.preventDefault()
    alert("Only support attachment files upto size 1MB!")
  }
})
class Blog < ApplicationRecord
  has_rich_text :content
  validates :title, :content, :author, presence: true

  enum author: {
    guest: 0,
    user: 1,
    admin: 2
  }, _prefix: true
end

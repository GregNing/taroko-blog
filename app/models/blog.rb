class Blog < ApplicationRecord
  has_rich_text :content
  validates :title, :author, presence: true

  enum author: {
    guest: 0,
    user: 1,
    admin: 2
  }, _prefix: true

  validate :filter_content

  private

  def filter_content
    errors.add(:content, "can't be empty") if rich_text_content.blank?
  end
end

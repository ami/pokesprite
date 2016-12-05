require 'json'

data = JSON.parse(File.read('./data/pkmn.json'))

count_per_row = 32
count = 0
x = -40
y = -30

item_x = -30
item_y = -30
love_ball_x = 41
love_ball_y = 15
love_ball_y_offset = -2

puts <<-EOF
.pkicon {
  @include crisp-rendering();

  display: inline-block;
  height: 30px;
  width: 40px;
  margin: 5px 0;
  background-image: url('/pokesprite.png');
  background-repeat: no-repeat;
}

EOF

data.each do |id, pokemon|
  pokemon["icons"].each do |name, icon|
    form = name == "." ? "" : ".form-#{name}"

    if !icon["is_duplicate"]
      puts ".pkicon.pkicon-#{id}#{form} { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
      count += 1

      if icon["has_right"]
        puts ".pkicon.pkicon-#{id}#{form}.dir-right { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      if icon["has_female"]
        puts ".pkicon.pkicon-#{id}#{form}.gender-female { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      puts ".pkicon.pkicon-#{id}#{form}.color-shiny { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
      count += 1

      if icon["has_right"]
        puts ".pkicon.pkicon-#{id}#{form}.color-shiny.dir-right { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      if icon["has_female"]
        puts ".pkicon.pkicon-#{id}#{form}.gender-female { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end
    end
  end
end

puts

puts ".pkicon.pkicon-ball-love { background-position: #{item_x * love_ball_x}px #{y * (count / count_per_row).floor + item_y * love_ball_y + love_ball_y_offset}px; }"

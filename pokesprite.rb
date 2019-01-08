require 'json'

data = JSON.parse(File.read('./data/pkmn.json'))

count_per_row = 32
count = 0
x = -50
y = -30

item_x = -30
item_y = -30
love_ball_x = 5
love_ball_y = 13
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
  # width_adjustment is to accommodate for "full" sprites like Melmetal
  width_adjustment = ""

  if pokemon["full"]
    width_adjustment = "width: 50px; "
  end

  pokemon["icons"].each do |name, icon|
    form = name == "." ? "" : ".form-#{name}"

    if !icon["is_duplicate"]
      puts ".pkicon.pkicon-#{id}#{form} { #{width_adjustment}background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
      count += 1

      if icon["has_right"]
        puts ".pkicon.pkicon-#{id}#{form}.dir-right { #{width_adjustment}background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      if icon["has_female"]
        puts ".pkicon.pkicon-#{id}#{form}.gender-female { #{width_adjustment}background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      puts ".pkicon.pkicon-#{id}#{form}.color-shiny { #{width_adjustment}background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
      count += 1

      if icon["has_right"]
        puts ".pkicon.pkicon-#{id}#{form}.color-shiny.dir-right { #{width_adjustment}background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      if icon["has_female"]
        puts ".pkicon.pkicon-#{id}#{form}.gender-female { #{width_adjustment}background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end
    end
  end
end

puts

puts ".pkicon.pkicon-ball-love { background-position: #{item_x * love_ball_x}px #{y * (count / count_per_row).floor + item_y * love_ball_y + love_ball_y_offset}px; }"

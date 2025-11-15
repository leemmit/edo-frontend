import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
        <h3>Авторизация в ИС ЭДО</h3>
        
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Логин</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Забыли пароль?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit">
                  Кнопка 1
                </Button>
                <Button variant="arrow">
                  Кнопка 2
                </Button>
                <Button variant="outline">
                  Кнопка 3
                </Button>
                <Button variant="icon">
                  Кнопка 4
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Нет учетной записи?{" "}
              <a href="#" className="underline underline-offset-4">
                Зарегистрироваться
              </a>
            </div>
          </form>
    </div>
  )
}

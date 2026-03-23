import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const tips = [
  {
    icon: "Sun",
    title: "Начни с рисующего",
    description: "Поставь основной источник под углом 45° — и сразу получишь профессиональный светотеневой рисунок.",
  },
  {
    icon: "Circle",
    title: "Контролируй заполняющий",
    description: "Соотношение рисующего к заполняющему 2:1 даёт мягкий, но объёмный результат.",
    popular: true,
  },
  {
    icon: "Sparkles",
    title: "Добавь контровый",
    description: "Подсветка сзади отделяет модель от фона и придаёт кадру кинематографичную глубину.",
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Три правила профессионального света</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Грамотное сочетание источников света — основа выразительного портрета.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${tip.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {tip.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Ключевое правило
                </span>
              )}

              <div className="pb-6 border-b border-dashed border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={tip.icon as "Sun"} size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{tip.title}</h3>
              </div>

              <p className="mt-6 text-muted-foreground text-sm leading-relaxed text-center">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

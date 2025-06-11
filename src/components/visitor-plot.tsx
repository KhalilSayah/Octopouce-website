import React from "react";
import { Card, CardBody, CardHeader, Input, Button, Select, SelectItem } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ref, push, onValue, off } from "firebase/database";
import { db } from "../firebase";

type Visitor = {
  id: string;
  name: string;
  event: string;
  x: number;
  y: number;
  color: string;
};

const eventColors: Record<string, string> = {
  hackathon: "#FF3BAC",
  ctf: "#00c3ff",
  datathon: "#17c964",
  workshop: "#f5a524",
};

const eventOptions = [
  { key: "hackathon", label: "Hackathon" },
  { key: "ctf", label: "CTF (Capture The Flag)" },
  { key: "datathon", label: "Datathon" },
  { key: "workshop", label: "Workshop Tech" },
];

export const VisitorPlot: React.FC = () => {
  const [visitors, setVisitors] = React.useState<Visitor[]>([]);
  const [name, setName] = React.useState("");
  const [event, setEvent] = React.useState<string>("hackathon");
  const [hoveredVisitor, setHoveredVisitor] = React.useState<Visitor | null>(null);
  const plotRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const visitorsRef = ref(db, "visitors");
    onValue(visitorsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const visitorsList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(value as Omit<Visitor, "id">),
        }));
        setVisitors(visitorsList);
      }
    });

    return () => {
      off(visitorsRef);
    };
  }, []);

  const handleAddVisitor = () => {
    if (!name.trim() || !plotRef.current) return;

    const plotWidth = plotRef.current.clientWidth;
    const plotHeight = plotRef.current.clientHeight;

    const x = Math.random() * (plotWidth - 40) + 20;
    const y = Math.random() * (plotHeight - 40) + 20;

    const newVisitor: Omit<Visitor, "id"> = {
      name: name.trim(),
      event,
      x,
      y,
      color: eventColors[event] || eventColors.hackathon,
    };

    push(ref(db, "visitors"), newVisitor);
    setName("");
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEvent(e.target.value);
  };

  return (
    <section id="visitors" className="py-20 px-4 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils ont tenté l'expérience</h2>
          <p className="text-xl text-foreground-600 max-w-2xl mx-auto">
            Laissez votre trace sur notre site et découvrez notre communauté d'événements tech.
          </p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="flex flex-col gap-4 md:flex-row md:items-end">
            <Input
              label="Votre pseudo"
              placeholder="Comment souhaitez-vous apparaître ?"
              value={name}
              onValueChange={setName}
              className="md:flex-1"
              variant="bordered"
              radius="lg"
              startContent={<Icon icon="lucide:user" className="text-default-400" />}
            />

            <Select
              label="Type d'événement"
              selectedKeys={[event]}
              onChange={handleEventChange}
              className="md:w-64"
              variant="bordered"
              radius="lg"
            >
              {eventOptions.map((option) => (
                <SelectItem key={option.key}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>

            <Button
              color="primary"
              onPress={handleAddVisitor}
              isDisabled={!name.trim()}
              className="md:w-auto w-full"
              startContent={<Icon icon="lucide:plus" />}
            >
              Ajouter
            </Button>
          </CardHeader>

          <CardBody>
            <div
              ref={plotRef}
              className="relative w-full h-[400px] bg-content1 rounded-lg border border-default-200 overflow-hidden"
            >
              {visitors.map((visitor) => (
                <motion.div
                  key={visitor.id}
                  className="absolute"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{
                    left: visitor.x,
                    top: visitor.y,
                  }}
                  onMouseEnter={() => setHoveredVisitor(visitor)}
                  onMouseLeave={() => setHoveredVisitor(null)}
                >
                  <div
                    className="w-4 h-4 rounded-full cursor-pointer"
                    style={{ backgroundColor: visitor.color }}
                  />

                  {hoveredVisitor?.id === visitor.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-sm whitespace-nowrap z-10"
                    >
                      <div className="font-bold">{visitor.name}</div>
                      <div className="text-xs">
                        {eventOptions.find((opt) => opt.key === visitor.event)?.label}
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {visitors.length === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-default-400">
                  <Icon icon="lucide:users" width={48} height={48} />
                  <p className="mt-2">Soyez le premier à laisser votre trace !</p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mt-4 text-sm text-default-500">
              <div>Total: {visitors.length} visiteurs</div>
              <div className="flex gap-4">
                {eventOptions.map((option) => (
                  <div key={option.key} className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: eventColors[option.key] }}
                    />
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
